pipeline {
  agent any

  environment {
    DOCKER_IMAGE    = 'nagarajan-portfolio'
    DOCKER_REGISTRY = 'ghcr.io/nagarajan13172'
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main',
            credentialsId: 'GITHUB_SECRET',
            url: "https://github.com/Nagarajan13172/Nagarajan_portfolio.git"
      }
    }

    stage('Inject ENV') {
      steps {
        withCredentials([file(credentialsId: 'ENV_FILE', variable: 'ENV_FILE')]) {
          sh 'cp "$ENV_FILE" .env'
        }
      }
    }

    stage('Build Docker Image') {
      steps {
        script {
          def tag = params.ENV_TARGET
          sh """
            docker build -t $DOCKER_REGISTRY/$DOCKER_IMAGE:latest .
          """
        }
      }
    }

    stage('RUN Docker Image') {
      steps {
        script {
          def tag = params.ENV_TARGET
          sh """
            docker compose up -d
          """
        }
      }
    }

    stage('Login to Registry') {
      steps {
        withCredentials([usernamePassword(
          credentialsId:   'GITHUB_SECRET',
          usernameVariable: 'USERNAME',
          passwordVariable: 'PASSWORD'
        )]) {
          sh 'echo $PASSWORD | docker login $DOCKER_REGISTRY -u $USERNAME --password-stdin'
        }
      }
    }

    stage('Push Image') {
      steps {
        script {
          def tag = params.ENV_TARGET
          sh "docker push $DOCKER_REGISTRY/$DOCKER_IMAGE:latest"
        }
      }
    }
  }

  post {
    always {
      echo "Pipeline finished at ${new Date().format("yyyy-MM-dd HH:mm:ss")}"
    }
    success {
      echo "✅ Build succeeded! Image pushed: ${DOCKER_REGISTRY}/${DOCKER_IMAGE}:latest"
    }
    failure {
      echo "❌ Build failed!"
    }
  }
}