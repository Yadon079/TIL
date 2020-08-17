const Algo = '/Algorithm'
const Blog = `/Blog`
const BookRe = `${Blog}/Book-Review`
const Book2020 = `${BookRe}/2020y`
const Review2020 = `Review/2020-year`

module.exports = [
  { title: 'Home', path: '/' },
  {
    title: '2020년 회고',
    children: [
      {
        title: '월 회고',
        children: [
          '01-January/',
          '02-February/',
          '03-March/',
          '04-April/',
          '05-May/',
          '06-June/',
          '07-July/',
        ].map(v => `${Review2020}/${v}`)
      },
      {
        title: '분기 회고',
        children: ['01-First-Quarter/', '02-Second-Quarter/'].map(v => `${Review2020}/${v}`)
      },
      {
        title: '반기 회고',
        children: ['01-First-Half/'].map(v => `${Review2020}/${v}`)
      },
    ]
  },
  {
    title: 'Algorithm',
    children: [
      { title: 'BOJ', path: `${Algo}/BOJ/` },
      { title: 'Programmers', path: `${Algo}/Programmers/` }
    ]
  },
  {
    title: 'Blog',
    children: [
      {
        title: 'Book Review',
        children: [
          '01-Jan./',
          '02-Feb./',
          '03-Mar./',
          '04-Apr./',
          '05-May./',
          '06-Jun./',
          '07-Jul./',
        ].map(v => `${Book2020}/${v}`)
      },
    ]
  },
  {
    title: 'SpringFramework',
  }
]
