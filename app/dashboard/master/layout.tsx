import { Sidebar } from "@/components/sidebar"

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex gap-3">
			<Sidebar />
			{children}
		</div>
	)
}
