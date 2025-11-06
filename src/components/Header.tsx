import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import logoImage from "figma:asset/ae0cf63b379a9c48a9bc8b575fbffd4cb0aee8c6.png";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="bg-background border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <img 
              src={logoImage} 
              alt="The Little Prints logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl text-primary tracking-tight">The Little Prints</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => onNavigate('home')}
              className={`text-sm transition-colors hover:text-primary ${
                currentPage === 'home' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('examples')}
              className={`text-sm transition-colors hover:text-primary ${
                currentPage === 'examples' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Examples
            </button>
            <button 
              onClick={() => onNavigate('learn-more')}
              className={`text-sm transition-colors hover:text-primary ${
                currentPage === 'learn-more' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              How It Works
            </button>
            <button 
              onClick={() => onNavigate('order')}
              className={`text-sm transition-colors hover:text-primary ${
                currentPage === 'order' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Create Poster
            </button>
            <Button 
              onClick={() => onNavigate('order')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
            >
              Start Your Poster
            </Button>
          </nav>
          
          <button className="md:hidden">
            <Menu className="w-6 h-6 text-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
}