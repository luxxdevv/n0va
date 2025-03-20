import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sparkles } from "lucide-react"

export default function IntegrationGuidePage() {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-10 text-center">
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="h-8 w-8 text-primary" />
          <div className="n0va-logo text-3xl">
            n<span>0</span>va.<span>one</span>
          </div>
        </div>
        <h1 className="mt-4 text-4xl font-bold">Integration Guide</h1>
        <p className="mt-2 text-zinc-400">How to integrate the N0va Dashboard with your main website</p>
      </div>

      <Tabs defaultValue="nextjs" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="nextjs">Next.js</TabsTrigger>
          <TabsTrigger value="react">React</TabsTrigger>
          <TabsTrigger value="api">API Only</TabsTrigger>
        </TabsList>
        <TabsContent value="nextjs">
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader>
              <CardTitle>Integrating with Next.js</CardTitle>
              <CardDescription>
                Follow these steps to integrate the N0va Dashboard with your Next.js website
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">1. Install Dependencies</h3>
                <pre className="rounded-md bg-zinc-950 p-4 overflow-x-auto">
                  <code className="text-sm">npm install @supabase/supabase-js</code>
                </pre>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">2. Set Up Environment Variables</h3>
                <p>
                  Create a <code>.env.local</code> file in your project root with the following variables:
                </p>
                <pre className="rounded-md bg-zinc-950 p-4 overflow-x-auto">
                  <code className="text-sm">
                    NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
                    <br />
                    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
                    <br />
                    SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
                  </code>
                </pre>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">3. Copy Required Files</h3>
                <p>Copy the following files from this project to your main site:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <code>lib/supabase.ts</code> - Supabase client
                  </li>
                  <li>
                    <code>lib/supabase-server.ts</code> - Server-side Supabase client
                  </li>
                  <li>
                    <code>hooks/use-auth.tsx</code> - Authentication hook
                  </li>
                  <li>
                    <code>app/auth/</code> - Authentication callback routes
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">4. Add Authentication Provider</h3>
                <p>Wrap your application with the AuthProvider in your layout:</p>
                <pre className="rounded-md bg-zinc-950 p-4 overflow-x-auto">
                  <code className="text-sm">
                    import &#123; AuthProvider &#125; from '@/hooks/use-auth'
                    <br />
                    <br />
                    export default function RootLayout(&#123;
                    <br />
                    &nbsp;&nbsp;children,
                    <br />
                    &#125;: &#123;
                    <br />
                    &nbsp;&nbsp;children: React.ReactNode
                    <br />
                    &#125;) &#123;
                    <br />
                    &nbsp;&nbsp;return (<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;html lang="en"&gt;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;AuthProvider&gt;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;children&#125;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/AuthProvider&gt;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/body&gt;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/html&gt;
                    <br />
                    &nbsp;&nbsp;)
                    <br />
                    &#125;
                  </code>
                </pre>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">5. Create a Link to the Dashboard</h3>
                <p>Add a link to your dashboard in your main site:</p>
                <pre className="rounded-md bg-zinc-950 p-4 overflow-x-auto">
                  <code className="text-sm">
                    import Link from 'next/link'
                    <br />
                    <br />
                    &lt;Link href="/dashboard" className="button"&gt;
                    <br />
                    &nbsp;&nbsp;Go to Dashboard
                    <br />
                    &lt;/Link&gt;
                  </code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="react">
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader>
              <CardTitle>Integrating with React</CardTitle>
              <CardDescription>
                Follow these steps to integrate the N0va Dashboard with your React website
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">1. Install Dependencies</h3>
                <pre className="rounded-md bg-zinc-950 p-4 overflow-x-auto">
                  <code className="text-sm">npm install @supabase/supabase-js react-router-dom</code>
                </pre>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">2. Set Up Environment Variables</h3>
                <p>
                  Create a <code>.env</code> file in your project root with the following variables:
                </p>
                <pre className="rounded-md bg-zinc-950 p-4 overflow-x-auto">
                  <code className="text-sm">
                    REACT_APP_SUPABASE_URL=your_supabase_url
                    <br />
                    REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
                  </code>
                </pre>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">3. Create Supabase Client</h3>
                <p>
                  Create a file called <code>supabase.js</code> with the following content:
                </p>
                <pre className="rounded-md bg-zinc-950 p-4 overflow-x-auto">
                  <code className="text-sm">
                    import &#123; createClient &#125; from '@supabase/supabase-js'
                    <br />
                    <br />
                    const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
                    <br />
                    const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY
                    <br />
                    <br />
                    export const supabase = createClient(supabaseUrl, supabaseAnonKey)
                  </code>
                </pre>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">4. Set Up Authentication Context</h3>
                <p>
                  Adapt the <code>use-auth.tsx</code> file to work with React Router:
                </p>
                <pre className="rounded-md bg-zinc-950 p-4 overflow-x-auto">
                  <code className="text-sm">
                    import &#123; createContext, useContext, useEffect, useState &#125; from 'react'
                    <br />
                    import &#123; useNavigate &#125; from 'react-router-dom'
                    <br />
                    import &#123; supabase &#125; from './supabase'
                    <br />
                    <br />
                    // Rest of the auth context implementation...
                  </code>
                </pre>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">5. Set Up Routes</h3>
                <p>Configure your routes in your main App component:</p>
                <pre className="rounded-md bg-zinc-950 p-4 overflow-x-auto">
                  <code className="text-sm">
                    import &#123; BrowserRouter, Routes, Route &#125; from 'react-router-dom'
                    <br />
                    import &#123; AuthProvider &#125; from './AuthContext'
                    <br />
                    <br />
                    function App() &#123;
                    <br />
                    &nbsp;&nbsp;return (<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;BrowserRouter&gt;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;AuthProvider&gt;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Routes&gt;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Route path="/"
                    element=&#123;&lt;Home /&gt;&#125; /&gt;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Route path="/dashboard/*"
                    element=&#123;&lt;Dashboard /&gt;&#125; /&gt;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Route path="/login"
                    element=&#123;&lt;Login /&gt;&#125; /&gt;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Route path="/signup"
                    element=&#123;&lt;Signup /&gt;&#125; /&gt;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Routes&gt;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/AuthProvider&gt;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/BrowserRouter&gt;
                    <br />
                    &nbsp;&nbsp;)
                    <br />
                    &#125;
                  </code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="api">
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader>
              <CardTitle>API-Only Integration</CardTitle>
              <CardDescription>
                If you want to use your own frontend but connect to the same Supabase backend
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">1. Use the Same Supabase Project</h3>
                <p>Make sure your main site connects to the same Supabase project using these credentials:</p>
                <pre className="rounded-md bg-zinc-950 p-4 overflow-x-auto">
                  <code className="text-sm">
                    SUPABASE_URL=your_supabase_url
                    <br />
                    SUPABASE_ANON_KEY=your_supabase_anon_key
                  </code>
                </pre>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">2. Access the Same Tables</h3>
                <p>Your main site can access the same tables that this dashboard uses:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <code>profiles</code> - User profiles
                  </li>
                  <li>
                    <code>social_links</code> - Social media links
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">3. Implement Authentication</h3>
                <p>Use Supabase Auth in your main site:</p>
                <pre className="rounded-md bg-zinc-950 p-4 overflow-x-auto">
                  <code className="text-sm">
                    import &#123; createClient &#125; from '@supabase/supabase-js'
                    <br />
                    <br />
                    const supabase = createClient(
                    <br />
                    &nbsp;&nbsp;'your_supabase_url',
                    <br />
                    &nbsp;&nbsp;'your_supabase_anon_key'
                    <br />
                    )<br />
                    <br />
                    // Sign up
                    <br />
                    const &#123; data, error &#125; = await supabase.auth.signUp(&#123;
                    <br />
                    &nbsp;&nbsp;email: 'example@email.com',
                    <br />
                    &nbsp;&nbsp;password: 'example-password',
                    <br />
                    &#125;)
                    <br />
                    <br />
                    // Sign in
                    <br />
                    const &#123; data, error &#125; = await supabase.auth.signInWithPassword(&#123;
                    <br />
                    &nbsp;&nbsp;email: 'example@email.com',
                    <br />
                    &nbsp;&nbsp;password: 'example-password',
                    <br />
                    &#125;)
                  </code>
                </pre>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">4. Query Data</h3>
                <p>Query the same tables from your main site:</p>
                <pre className="rounded-md bg-zinc-950 p-4 overflow-x-auto">
                  <code className="text-sm">
                    // Get user profile
                    <br />
                    const &#123; data: profile, error &#125; = await supabase
                    <br />
                    &nbsp;&nbsp;.from('profiles')
                    <br />
                    &nbsp;&nbsp;.select('*')
                    <br />
                    &nbsp;&nbsp;.eq('id', user.id)
                    <br />
                    &nbsp;&nbsp;.single()
                    <br />
                    <br />
                    // Get user social links
                    <br />
                    const &#123; data: socialLinks, error &#125; = await supabase
                    <br />
                    &nbsp;&nbsp;.from('social_links')
                    <br />
                    &nbsp;&nbsp;.select('*')
                    <br />
                    &nbsp;&nbsp;.eq('user_id', user.id)
                    <br />
                    &nbsp;&nbsp;.order('display_order', &#123; ascending: true &#125;)
                  </code>
                </pre>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">5. Link to Dashboard</h3>
                <p>You can still link to this dashboard from your main site:</p>
                <pre className="rounded-md bg-zinc-950 p-4 overflow-x-auto">
                  <code className="text-sm">
                    &lt;a href="https://your-dashboard-url.vercel.app/dashboard" class="button"&gt;
                    <br />
                    &nbsp;&nbsp;Manage Your Profile
                    <br />
                    &lt;/a&gt;
                  </code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

