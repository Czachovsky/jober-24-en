export interface TimelineTypes {
  id: string;
  year: string | number;
  header?: string;
  description?: string;
  activeState?: boolean;
}


export const timelineObject: TimelineTypes[] = [
  {
    id: 'owl-slide-0',
    year: 2016,
    header: 'Entry into the Automotive Market',
    description: 'Jober24 begins operations by securing its first large contract for 160 employees in the automotive industry. This marks the direction for further development and expansion.',
    activeState: true
  },
  {
    id: 'owl-slide-1',
    year: 2017,
    header: 'Expansion to the East',
    description: 'The opening of an office in Kyiv increases the efficiency of recruitment and access to the Ukrainian labor market.',
    activeState: false
  },
  {
    id: 'owl-slide-2',
    year: 2018,
    header: 'Globalization and Entry into the Asian Markets',
    description: 'Jober24 expands its operations into Asia, recruiting employees from Nepal, India, the Philippines, Vietnam, and Malaysia. Crossing the symbolic milestone of 1000 employees confirms the company’s growing position.',
    activeState: false
  },
  {
    id: 'owl-slide-3',
    year: 2019,
    header: 'Entry into the Middle Eastern Market',
    description: 'Jober24 establishes a company in the United Arab Emirates, enabling more effective recruitment and collaboration with local business partners.',
    activeState: false
  },
  {
    id: 'owl-slide-4',
    year: 2020,
    header: 'Headquarters in Switzerland and Entry into E-commerce',
    description: 'Jober24 moves its headquarters to Switzerland, preparing for expansion in Central Europe. Despite the global COVID-19 pandemic, the company maintains its position by entering the e-commerce industry.',
    activeState: false
  },
  {
    id: 'owl-slide-5',
    year: 2021,
    header: 'First IT Contracts in Swiss Banking',
    description: 'Jober24 secures its first strategic contracts to supply IT specialists for banks in Switzerland, strengthening its position in the financial sector.',
    activeState: false
  },
  {
    id: 'owl-slide-6',
    year: 2022,
    header: 'Entry into the Healthcare Sector',
    description: 'Expanding into the healthcare sector allows further diversification of services and the supply of medical personnel.',
    activeState: false
  },
  {
    id: 'owl-slide-7',
    year: 2023,
    header: 'Further Expansion and Market Consolidation',
    description: 'Further expansion and market consolidation.',
    activeState: false
  },
  {
    id: 'owl-slide-8',
    year: 2024,
    header: 'Jober24 AI: Automation and Scaling',
    description: 'The company implements advanced AI solutions that enable faster and more efficient scaling of operations. New AI-based products become the foundation for further development.',
    activeState: false
  },
  {
    id: 'owl-slide-9',
    year: 2025,
    header: 'Digital Transformation and Technological Development',
    description: 'Jober24 builds its own AI portal and advanced recruitment tools using the latest IT technologies. The IT department becomes a key pillar of the company, enabling further automation and global expansion. At the same time, Jober24 is seeking partners – manufacturers of humanoid robots – to strengthen its position in the outsourcing sector.',
    activeState: false
  }
]

