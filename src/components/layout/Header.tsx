import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, ShoppingBag, Info, Phone, HelpCircle, Menu, X, ShoppingCart, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const { getItemCount } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  // Check if user is logged in (you can use your auth context/state)
  const [isLoggedIn] = useState(false); // Replace with actual auth state
  const [userName] = useState('User'); // Replace with actual user data


  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'ShopNow', path: '/shop', icon: ShoppingBag },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Contact', path: '/contact', icon: Phone },
    { name: 'FAQ', path: '/faq', icon: HelpCircle },
  ];


  const isActive = (path: string) => location.pathname === path;

  const handleLoginClick = () => {
    navigate('/login');
    setProfileMenuOpen(false);
  };

  const handleLogoutClick = () => {
    // Call your logout function here
    // logout();
    setProfileMenuOpen(false);
    navigate('/');
  };


  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md shadow-md">
      <div className="container py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            
            <div>
              <span className="font-bold text-xl md:text-2xl text-foreground">Harvest</span>
              <span className="font-bold text-xl md:text-2xl text-primary"> Bites</span>
            </div>
          </Link>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-primary text-primary-foreground shadow-glow'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </Link>
            ))}
          </nav>


          {/* Cart, Profile & Mobile Menu */}
          <div className="flex items-center gap-2">
            {/* Cart Button */}
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {getItemCount() > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-bold animate-scale-in">
                    {getItemCount()}
                  </span>
                )}
              </Button>
            </Link>

            {/* Profile/Login Button with Dropdown */}
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                className="relative"
                title={isLoggedIn ? `Profile - ${userName}` : 'Login'}
              >
                <User className="w-5 h-5" />
              </Button>

              {/* Profile Dropdown Menu */}
              {profileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg py-2 z-50 animate-slide-up">
                  {isLoggedIn ? (
                    <>
                      <div className="px-4 py-2 border-b border-border">
                        <p className="text-sm font-medium text-foreground">{userName}</p>
                        <p className="text-xs text-muted-foreground">user@example.com</p>
                      </div>
                      <Link
                        to="/profile"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                        onClick={() => setProfileMenuOpen(false)}
                      >
                        <User className="w-4 h-4" />
                        My Profile
                      </Link>
                      <Link
                        to="/orders"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                        onClick={() => setProfileMenuOpen(false)}
                      >
                        <ShoppingBag className="w-4 h-4" />
                        My Orders
                      </Link>
                      <button
                        onClick={handleLogoutClick}
                        className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-muted transition-colors border-t border-border mt-2 pt-2"
                      >
                        <LogOut className="w-4 h-4" />
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={handleLoginClick}
                        className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                      >
                        <User className="w-4 h-4" />
                        Login
                      </button>
                      <Link
                        to="/signup"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors border-t border-border mt-2 pt-2"
                        onClick={() => setProfileMenuOpen(false)}
                      >
                        <User className="w-4 h-4" />
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>


        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-slide-up">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};


export default Header;
