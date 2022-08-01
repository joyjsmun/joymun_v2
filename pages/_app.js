import '../styles/globals.css'
import {motion,AnimatePresence} from "framer-motion";
import { ThemeProvider } from "next-themes";
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps,router }) {
// #1
  const variants = {
    in: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.75,
        delay: 0.2
      }
    },
    out: {
      opacity: 0,
      scale: 1,
      y: 40,
      transition: {
        duration: 0.5
      }
    }
  };

  
  
  return (
    <ThemeProvider attribute="class">
    <AnimatePresence initial={false} exitBeforeEnter>
    <motion.div
    key={router.route}
    variants={variants}
          animate="in"
          initial="out"
          exit="out"
    >
      <Component {...pageProps} />
    </motion.div>
    </AnimatePresence>
    </ThemeProvider>
  )
}

export default MyApp
