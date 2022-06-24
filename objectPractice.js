let student = {
  name: 'David Rayy',
  sclass: 'VI',
  rollno: 12,
};

let library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true,
    libraryID: 1254,
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true,
    libraryID: 4264,
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false,
    libraryID: 3245,
  },
];

const objectFun = () => {
  for (let s in student) {
    console.log('s: ', s);
  }
  console.log('student: ', student);
  // delete student.rollno;
  // console.log('student after delete: ', student);
  // console.log('Len of the Object: ', Object.entries(student).length); // Get the length of the object.
  // The above can also be achieved by doing.
  /* let osize = 0;
  for (let key in student) {
    if (student.hasOwnProperty(key)) {
      osize++;
    }
  }
  console.log('osize: ', osize); */
  library.map((values) => {
    let book = values.title + ' by ' + values.author;
    if (values.readingStatus) {
      console.log('Already read: ', book);
    } else {
      console.log('You still need to read: ', book);
    }
  });
}

objectFun();
let sort_by = (field_name, reverse, initial) => {
  let key = initial ? function (x) { return initial(x[field_name]); } : function (x) { return x[field_name]; }
  reverse = !reverse ? 1 : -1;
  return function (x, y) {
    return x = key(x), y = key(y), reverse * ((x > y) - (y > x));
  };
};

let newobj = library.sort(sort_by('libraryID', true, parseInt));
console.log(newobj);
