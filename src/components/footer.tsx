import { Heart } from "lucide-react"
import { Code } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="w-full mt-auto pt-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <p className="text-white/80 text-sm sm:text-base">
            Made with <span className="text-pink-500">
              <Heart className="w-4 h-4 inline hover:scale-120 transition-all duration-500" />
            </span> | Jittiphat Somsai
          </p>
          <p className="text-white/60 text-xs sm:text-sm">
            <a
              className="hover:underline hover:text-red-400 inline-flex items-center gap-1"
              href="https://github.com/Jittiphatz/1Year-Anniversary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code className="w-4 h-4 inline" />
              Source Code
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer