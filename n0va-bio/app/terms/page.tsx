import { Navbar } from "@/components/navbar"

export default function Terms() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="prose prose-invert max-w-4xl mx-auto">
          <h1>Terms of Service</h1>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using n0va.one ("the Service"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using the Service.</p>
          
          <h2>2. Use License</h2>
          <p>Permission is granted to temporarily access the Service for personal, non-commercial use. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
          <ul>
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to reverse engineer any software contained in the Service</li>
            <li>Remove any copyright or other proprietary notations</li>
            <li>Transfer the materials to another person</li>
          </ul>

          <h2>3. User Content</h2>
          <p>Users are responsible for their own content and must ensure it complies with all applicable laws and regulations. We reserve the right to remove any content that violates these terms.</p>

          <h2>4. Account Terms</h2>
          <p>You are responsible for maintaining the security of your account and password. The Service cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.</p>

          <h2>5. Limitations</h2>
          <p>In no event shall n0va.one be liable for any damages arising out of the use or inability to use the Service, even if we have been notified of the possibility of such damages.</p>

          <h2>6. Privacy</h2>
          <p>Your use of the Service is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the Service and informs users of our data collection practices.</p>

          <h2>7. Modifications</h2>
          <p>We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.</p>

          <h2>8. Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us through our Discord server.</p>
        </div>
      </div>
    </div>
  )
}

