const outputDiv = document.getElementById('output')

const ulBegin = '<ul>'
const ulEnd = '</ul>'
const liBegin = '<li>'
const liEnd = '</li>'

const org1_depts = [
    {
      name: 'accounting',
      children: [
        { name: 'accounting payable', children: [] },
        { name: 'accounting receivable', children: [] },
      ],
    },
    {
      name: 'finance',
      children: [],
    },
  ]  

const org2_depts = [
    {
      name: 'accounting',
      children: [
        { name: 'accounting payable', children: [] },
        {
          name: 'accounting receivable',
          children: [{ name: 'cash', children: [] }, { name: 'check', children: [] }],
        },
      ],
    },
    {
      name: 'finance',
      children: [{ name: 'investment', children: [] }],
    },
  ]
  
function printDepts(depts) {
  let ul = ulBegin
  for (const dept of depts) {
    ul += liBegin
    ul += dept.name
    ul += liEnd

    if (dept.children.length !== 0) {
      ul += printDepts(dept.children)
    }
  }
  ul += ulEnd
  return ul
}
  
let output = '<h2>Organization 1</h2>'
output += printDepts(org1_depts)

output += '<h2>Organization 2</h2>'
output += printDepts(org2_depts)

outputDiv.innerHTML = output
