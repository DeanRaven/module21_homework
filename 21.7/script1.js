const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
const xmlDom = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDom.querySelector("list");
const studentNode = listNode.querySelector("student");
const nameNode = listNode.querySelector("name");
const firstNode = listNode.querySelector("first");
const secondNode = listNode.querySelector("second");
const ageNode = listNode.querySelector("age");
const profNode = listNode.querySelector("prof");

const langAttr = nameNode.getAttribute('lang');

const result = {
    lang: langAttr,
    list: listNode.textContent,
    student: studentNode.textContent,
    name: nameNode.textContent,
    first: firstNode.textContent,
    second: secondNode.textContent,
    age: ageNode.textContent,
    prof: profNode.textContent,
};

console.log ('result', result)