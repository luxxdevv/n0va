import { Navbar } from "@/components/navbar"

export default function DMCA() {
  return (
    <div className="min-h-screen bg-zinc-100">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="prose prose-invert max-w-4xl mx-auto">
          <h1>DMCA Policy</h1>
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <h2>1. Introduction</h2>
          <p>n0va.one respects the intellectual property rights of others and expects its users to do the same. In accordance with the Digital Millennium Copyright Act of 1998 ("DMCA"), we will respond expeditiously to claims of copyright infringement that are reported to our designated copyright agent.</p>

          <h2>2. DMCA Notice Requirements</h2>
          <p>If you are a copyright owner or authorized to act on behalf of one, you may report alleged copyright infringement by submitting a DMCA Notice. Your notice must include:</p>
          <ul>
            <li>Identification of the copyrighted work claimed to have been infringed</li>
            <li>Identification of the material claimed to be infringing</li>
            <li>Your contact information (name, address, telephone number, email)</li>
            <li>A statement that you have a good faith belief that use of the material is not authorized</li>
            <li>A statement that the information in the notification is accurate</li>
            <li>Your physical or electronic signature</li>
          </ul>

          <h2>3. Counter-Notice</h2>
          <p>If you believe your content was wrongly removed due to a mistake or misidentification, you may submit a counter-notice containing:</p>
          <ul>
            <li>Identification of the removed material and its location before removal</li>
            <li>A statement under penalty of perjury that you have a good faith belief the material was removed by mistake</li>
            <li>Your contact information</li>
            <li>A statement that you consent to local federal court jurisdiction</li>
            <li>Your physical or electronic signature</li>
          </ul>

          <h2>4. Repeat Infringers</h2>
          <p>We maintain a policy of terminating accounts of repeat infringers in appropriate circumstances.</p>

          <h2>5. Filing a DMCA Notice</h2>
          <p>DMCA notices can be submitted through our Discord server or to our designated copyright agent:</p>
          <pre>
            n0va.one Copyright Agent
            [Contact Information]
          </pre>

          <h2>6. Modifications</h2>
          <p>We reserve the right to modify this DMCA Policy at any time. Changes will be effective immediately upon posting to the Service.</p>

          <h2>7. Contact Information</h2>
          <p>If you have any questions about our DMCA Policy, please contact us through our Discord server.</p>
        </div>
      </div>
    </div>
  )
}

