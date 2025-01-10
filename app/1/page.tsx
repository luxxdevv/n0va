import BioPage from '@/components/bio/BioPage'
import { defaultProfile } from '@/components/bio/profileConfig'

export default function Home() {
  return <BioPage config={defaultProfile} />
}

