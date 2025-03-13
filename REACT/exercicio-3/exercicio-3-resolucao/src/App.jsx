import Profile from "./components/Profile";

export default function App() {
  return (
    <div className="app">
      <Profile
        avatar="https://randomuser.me/api/portraits/men/75.jpg"
        name="John Doe"
        bio="Full-stack javascript developer at Acme Inc."
        email="john.doe@email.com"
        phone="+5511987654321"
        githubUrl="https://github.com"
        linkedinUrl="https://linkedin.com"
        twitterUrl="https://twitter.com"
      />
    </div>
  )
}