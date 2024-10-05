import React from 'react';
import { FaMapMarkerAlt, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const styles = {
    navbar: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: 'url("/bckg img.avif")', // Update with the correct image path
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh', // Full height for the navbar
      color: 'white',
      position: 'relative',
      padding: '0 20px', // Add padding for mobile
    },
    navbarTop: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      padding: '10px 20px',
      fontSize: '14px',
    },
    navbarLinks: {
      display: 'flex',
      gap: '20px',
    },
    link: {
      textDecoration: 'none',
      color: 'white',
      cursor: 'pointer',
    },
    navbarMain: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    menuIcon: {
      fontSize: '24px',
      cursor: 'pointer',
      position: 'absolute',
      top: '20px',
      left: '20px',
    },
    navbarTitle: {
      fontSize: '48px', // Responsive size
      fontWeight: 'bold',
      marginTop: '20px',
      textAlign: 'center', // Center on smaller screens
    },
    centerText: {
      fontSize: '18px', // Responsive size
      marginTop: '10px',
      textAlign: 'center',
    },
    searchContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: '50px',
      padding: '10px',
      marginTop: '20px',
      width: '100%',
      maxWidth: '800px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    searchInner: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap', // Allow wrapping on small screens
    },
    icon: {
      color: 'red',
      marginRight: '10px',
    },
    input: {
      border: 'none',
      padding: '10px',
      borderRadius: '5px',
      fontSize: '16px',
      marginRight: '10px',
      width: '120px',
      minWidth: '100px', // Ensure it doesn't shrink too much on mobile
    },
    searchBox: {
      flex: '1',
      border: 'none',
      padding: '10px',
      fontSize: '16px',
      minWidth: '200px',
      marginRight: '10px',
    },
    filterDropdown: {
      padding: '10px',
      marginRight: '10px',
      border: 'none',
    },
    locationButton: {
      backgroundColor: 'white',
      padding: '10px',
      border: '2px solid red',
      color: 'red',
      borderRadius: '50px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
    },
    locationIcon: {
      marginRight: '5px',
    },

    // Responsive styles using media queries
    '@media (max-width: 768px)': {
      navbarTitle: {
        fontSize: '36px',
      },
      centerText: {
        fontSize: '16px',
      },
      searchContainer: {
        flexDirection: 'column',
        padding: '15px',
      },
      searchInner: {
        flexDirection: 'column',
        alignItems: 'stretch',
      },
      input: {
        width: '100%',
        marginBottom: '10px',
      },
      searchBox: {
        width: '100%',
        marginBottom: '10px',
      },
      filterDropdown: {
        width: '100%',
      },
    },
    '@media (max-width: 480px)': {
      navbarTitle: {
        fontSize: '28px',
      },
      centerText: {
        fontSize: '14px',
      },
      searchContainer: {
        padding: '10px',
      },
    },
  };

  return (
    <div style={styles.navbar}>
      {/* Top links */}
      <div style={styles.navbarTop}>
        <span>Get the App</span>
        <div style={styles.navbarLinks}>
          <a href="#" style={styles.link}>Investor Relations</a>
          <a href="#" style={styles.link}>Add restaurant</a>
          <a href="#" style={styles.link}>Log in</a>
          <a href="#" style={styles.link}>Sign up</a>
        </div>
      </div>

      {/* Main content */}
      <div style={styles.navbarMain}>
        <FaBars style={styles.menuIcon} />
        <h1 style={styles.navbarTitle}>zomato</h1>
      </div>
      <div style={styles.centerText}>
        <h2>Discover the best food & drinks in Chhindwara</h2>
      </div>

      {/* Search section */}
      <div style={styles.searchContainer}>
        <div style={styles.searchInner}>
          <FaMapMarkerAlt style={styles.icon} />
          <input type="text" placeholder="Chhindwara" style={styles.input} />
          <select style={styles.filterDropdown}>
            <option value="">All</option>
            <option value="restaurant">Restaurant</option>
            <option value="cuisine">Cuisine</option>
            <option value="dish">Dish</option>
          </select>
          <input type="text" placeholder="Search for restaurant, cuisine or a dish" style={styles.searchBox} />
        </div>
      </div>

      {/* Detect Location Button */}
      <div style={{ marginTop: '20px' }}>
        <button style={styles.locationButton}>
          <FaMapMarkerAlt style={styles.locationIcon} />
          Detect current location
        </button>
      </div>
    </div>
  );
};

export default Navbar;
