import { Navbar } from "@/components/navbar"

export default function Privacy() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="prose prose-invert max-w-4xl mx-auto">
          <h1>Privacy Policy</h1>
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <h2>1. Information We Collect</h2>
          <p>We collect information that you provide directly to us:</p>
          <ul>
            <li>Account information (username, email address)</li>
            <li>Profile information (social media links, biography)</li>
            <li>Usage data and analytics</li>
            <li>Communication preferences</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and maintain the Service</li>
            <li>Improve and personalize your experience</li>
            <li>Communicate with you about updates and changes</li>
            <li>Monitor and analyze usage patterns</li>
            <li>Protect against unauthorized access</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>We do not sell or rent your personal information to third parties. We may share your information in the following circumstances:</p>
          <ul>
            <li>With your consent</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights and safety</li>
            <li>In connection with a business transfer</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

          <h2>5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
            <li>Export your data</li>
          </ul>

          <h2>6. Cookies and Tracking</h2>
          <p>We use cookies and similar tracking technologies to track activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>

          <h2>7. Children's Privacy</h2>
          <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personal information from children under 13.</p>

          <h2>8. Changes to This Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date.</p>

          <h2>9. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us through our Discord server.</p>
        </div>
      </div>
    </div>
  )
}

