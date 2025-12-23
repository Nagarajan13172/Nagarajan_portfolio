import { motion } from "motion/react";
import { Heart, ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 relative border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <motion.a
              href="#home"
              className="text-2xl font-bold gradient-text font-display inline-block mb-2"
              whileHover={{ scale: 1.05 }}
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
            >
              SN
            </motion.a>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Nagarajan. All rights reserved.
            </p>
          </div>
          
          {/* Made with love */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-destructive fill-destructive" />
            </motion.div>
            <span>and lots of coffee</span>
          </div>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-xl glass-effect hover:bg-secondary/50 transition-colors"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
