import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="border-t bg-background">
//       <div className="container py-8 md:py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <h3 className="text-lg font-semibold mb-4">About Us</h3>
//             <p className="text-muted-foreground">
//               We are dedicated to providing the best experience for our users with innovative solutions.
//             </p>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/" className="text-muted-foreground hover:text-foreground">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/events" className="text-muted-foreground hover:text-foreground">
//                   Events
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/about" className="text-muted-foreground hover:text-foreground">
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className="text-muted-foreground hover:text-foreground">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Resources</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/blog" className="text-muted-foreground hover:text-foreground">
//                   Blog
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/faq" className="text-muted-foreground hover:text-foreground">
//                   FAQ
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/support" className="text-muted-foreground hover:text-foreground">
//                   Support
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Connect</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="#" className="text-muted-foreground hover:text-foreground">
//                   Twitter
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-muted-foreground hover:text-foreground">
//                   Facebook
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-muted-foreground hover:text-foreground">
//                   Instagram
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-muted-foreground hover:text-foreground">
//                   LinkedIn
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
//           <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   )
// }


import "../styles/footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-heading">About Us</h3>
            <p className="footer-text">
              We are dedicated to providing the best experience for our users with innovative solutions.
            </p>
          </div>
          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li className="footer-link-item">
                <Link href="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li className="footer-link-item">
                <Link href="/events" className="footer-link">
                  Events
                </Link>
              </li>
              <li className="footer-link-item">
                <Link href="/about" className="footer-link">
                  About
                </Link>
              </li>
              <li className="footer-link-item">
                <Link href="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="footer-heading">Resources</h3>
            <ul className="footer-links">
              <li className="footer-link-item">
                <Link href="/blog" className="footer-link">
                  Blog
                </Link>
              </li>
              <li className="footer-link-item">
                <Link href="/faq" className="footer-link">
                  FAQ
                </Link>
              </li>
              <li className="footer-link-item">
                <Link href="/support" className="footer-link">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="footer-heading">Connect</h3>
            <ul className="footer-links">
              <li className="footer-link-item">
                <Link href="#" className="footer-link">
                  Twitter
                </Link>
              </li>
              <li className="footer-link-item">
                <Link href="#" className="footer-link">
                  Facebook
                </Link>
              </li>
              <li className="footer-link-item">
                <Link href="#" className="footer-link">
                  Instagram
                </Link>
              </li>
              <li className="footer-link-item">
                <Link href="#" className="footer-link">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}