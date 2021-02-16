import React from 'react'
import { Link } from 'gatsby'
import styles from './footer.module.css'

export default () => (
  <footer className={styles.navigation}>
    <div id="copyright">
        <div className="container">
            <div className={styles.navigationItem}>
				<p> 
                    <a href="#">© 2021 Digital Solutions</a>
                    <a href="#">Terms of Service </a>
                    <a href="#" rel="noopener">Sitemap</a>
                    <a href="#" rel="noopener">Privacy Policy</a>
                    <a href="#" rel="noopener">Careers</a>
                </p>	
            </div>			
        </div>	
    </div>
  </footer>
)


