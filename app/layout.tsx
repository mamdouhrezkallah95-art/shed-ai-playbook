import './globals.css';
import type { Metadata } from 'next';
export const metadata:Metadata={title:'SHED AI PLAYBOOK — Build. Automate. Execute.',description:'A practical library of AI systems, agents, workflows and execution playbooks.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
