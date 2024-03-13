import { SimpleLayout } from './SimpleLayout'
import { Card } from './Card'
import { Container } from './Container'

const items = [
  {
    name: 'Javascript',
  },
  {
    name: 'Typescript',
  },
  {
    name: 'HTML',
  },
  {
    name: 'CSS',
  },
  {
    name: 'SQL',
  },
  {
    name: 'JSON',
  },
  {
    name: 'Python',
  },
  {
    name: 'PHP',
  },
]

const frameworks = [
  {
    name: 'React',
  },
  {
    name: 'Next.js',
  },
  {
    name: 'Angular',
  },
  {
    name: 'AngularJS',
  },
  {
    name: 'Vue.js',
  },
  {
    name: 'Tailwind',
  },
  {
    name: 'jQuery',
  },
  {
    name: 'Express.js',
  },
]

const backends = [
  {
    name: 'PostgreSQL',
  },
  {
    name: 'SQLite',
  },
  {
    name: 'MongoDB',
  },
  {
    name: 'MySQL',
  },
  {
    name: 'Firestore',
  },
  {
    name: 'NoSQL',
  },
]

export default function SkillContainer() {
  return (
    <div className="h-auto rounded-xl border border-zinc-100 bg-zinc-100/50 shadow-lg dark:border-zinc-700/50 dark:bg-zinc-800/50">
      <div className="m-3 text-center text-lg font-bold ">Languages</div>
      <div
        role="list"
        className="mx-auto grid grid-cols-2 gap-5 p-2 sm:grid-cols-3"
      >
        {items.map((items) => (
          <Card
            as="li"
            key={items.name}
            className="rounded-lg bg-white p-3 dark:bg-zinc-800/50"
          >
            <h2 className="m-3  text-center text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card>{items.name}</Card>
            </h2>
          </Card>
        ))}
      </div>
      <div className="m-3 text-center text-lg font-bold ">
        Frameworks/Libraries
      </div>
      <div
        role="list"
        className="mx-auto grid grid-cols-2 gap-5 p-2 sm:grid-cols-3"
      >
        {frameworks.map((frameworks) => (
          <Card
            as="li"
            key={frameworks.name}
            className="rounded-lg bg-white p-3 dark:bg-zinc-800/50"
          >
            <h2 className="m-3  text-center text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card>{frameworks.name}</Card>
            </h2>
          </Card>
        ))}
      </div>
      <div className="m-3 text-center text-lg font-bold ">
        Backend/Databases
      </div>
      <div
        role="list"
        className="mx-auto grid grid-cols-2 gap-5 p-2 sm:grid-cols-3"
      >
        {backends.map((backends) => (
          <Card
            as="li"
            key={backends.name}
            className="rounded-lg bg-white p-3 dark:bg-zinc-800/50"
          >
            <h2 className="m-3  text-center text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card>{backends.name}</Card>
            </h2>
          </Card>
        ))}
      </div>
      <div className="m-3 text-center text-lg font-bold ">
        Tools/Software
      </div>
      <div
        role="list"
        className="mx-auto grid grid-cols-2 gap-5 p-2 sm:grid-cols-3"
      >
        {items.map((items) => (
          <Card
            as="li"
            key={items.name}
            className="rounded-lg bg-white p-3 dark:bg-zinc-800/50"
          >
            <h2 className="m-3  text-center text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card>{items.name}</Card>
            </h2>
          </Card>
        ))}
      </div>
    </div>
  )
}
