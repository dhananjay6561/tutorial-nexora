import styles from "./page.module.css";

const steps = [
  { emoji: "🔍", title: "Explore", text: "Find a project you care about and read its README." },
  { emoji: "🍴", title: "Fork & Clone", text: "Make your own copy and run it locally." },
  { emoji: "🛠️", title: "Contribute", text: "Fix a bug, improve docs, or add a feature." },
  { emoji: "🚀", title: "Open a PR", text: "Share your work and learn from code review." },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <p className={styles.badge}>Open Source Workshop</p>
      <h1 className={styles.title}>
        Hi, students! <span className={styles.wave}>👋</span>
      </h1>
      <p className={styles.subtitle}>
        Welcome to the Open Source Workshop. Today you&apos;ll learn how to find a
        project, make your first contribution, and become part of a global
        community of developers.
      </p>

      <section className={styles.grid}>
        {steps.map((step) => (
          <div key={step.title} className={styles.card}>
            <span className={styles.emoji}>{step.emoji}</span>
            <h2>{step.title}</h2>
            <p>{step.text}</p>
          </div>
        ))}
      </section>

      <p className={styles.footer}>
        No contribution is too small. Let&apos;s build something together! 💜
      </p>
    </main>
  );
}
