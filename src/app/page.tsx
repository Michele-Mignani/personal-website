import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center px-4 py-8">
      {/* Profile Section */}
      <section className="flex flex-col items-center mt-8 mb-12">
        <Image
          className="rounded-full border-4 border-blue-500 shadow-lg"
          src="/profile.jpeg" 
          alt="Michele Mignani"
          width={120}
          height={120}
          priority
        />
        <h1 className="text-3xl font-bold mt-4">Michele Mignani</h1>
        <p className="text-lg text-blue-600 dark:text-blue-400">PhD Student</p>
        <p className="mt-2 text-center max-w-xl">Short bio about yourself. You can mention your interests, background, or anything you'd like visitors to know.</p>
      </section>

      {/* About Section */}
      <section className="w-full max-w-2xl mb-12">
        <h2 className="text-2xl font-semibold mb-2 border-b border-blue-500 pb-1">About</h2>
        <p>
          Write a few sentences about your background, education, experience, or anything else you'd like to share in your About section.
        </p>
      </section>

      {/* Projects Section */}
      <section className="w-full max-w-2xl mb-12">
        <h2 className="text-2xl font-semibold mb-2 border-b border-blue-500 pb-1">Projects</h2>
        <ul className="space-y-4">
          <li className="border rounded p-4 shadow-sm">
            <h3 className="font-bold">Project Title 1</h3>
            <p>Short description of your project. <a href="#" className="text-blue-600 underline">Link</a></p>
          </li>
          <li className="border rounded p-4 shadow-sm">
            <h3 className="font-bold">Project Title 2</h3>
            <p>Short description of your project. <a href="#" className="text-blue-600 underline">Link</a></p>
          </li>
          {/* Add more projects as needed */}
        </ul>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-2xl mb-12">
        <h2 className="text-2xl font-semibold mb-2 border-b border-blue-500 pb-1">Contact</h2>
        <p>
          You can reach me at <a href="mailto:your.email@example.com" className="text-blue-600 underline">your.email@example.com</a>
          {/* Add social links below */}
        </p>
        <div className="flex gap-4 mt-2">
          <a href="#" className="text-blue-600 underline">LinkedIn</a>
          <a href="#" className="text-blue-600 underline">GitHub</a>
          {/* Add more social links as needed */}
        </div>
      </section>

      <footer className="mt-auto py-4 text-sm text-gray-500">© {new Date().getFullYear()} Your Name. All rights reserved.</footer>
    </div>
  );
}
