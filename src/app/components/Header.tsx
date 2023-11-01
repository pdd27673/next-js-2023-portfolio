import exp from 'constants'
import React from 'react'

export interface section {
  name: string
  href: string
  component: React.ReactNode
  displayInHeader?: boolean
}

export interface HeaderProps {
  sections: section[]
}

export const Header: React.FC<HeaderProps> = ({ sections }) => {

  return (
    <header className="p-4 flex justify-center items-center">
      <nav>
        <ul className="flex space-x-4">
          {sections
            .filter(sec => sec.displayInHeader !== false)
            .map((section, index) => (
              <li key={`${index}-${section.name}`}>
                <a href={section.href}>{section.name}</a>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
}
