/**

HMIS = Health Management Information System (label)
(Health) Indicator = any measurable unit of health

 ---------------------
|                   v |
 ---------------------
  ---------------------------------------------
 | + HMIS Malaria >							   |
 |---------------------------------------------|
 | + HMIS Maternal & Child Health >			   |
  ---------------------------------------------
If all categories were expanded:
  ---------------------------------------------
 | + HMIS Malaria >							   |
 |---------------------------------------------|
 | 		+ Positive Malaria >				   |
 |---------------------------------------------|
 |			- Total number positive			   |
 |			- < 5 yrs Male 					   |
 |			- < 5 yrs Female				   |
 |---------------------------------------------|
 |	 	- Total Tests						   |
 |---------------------------------------------|
 | + HMIS Maternal & Child Health >			   |
 |---------------------------------------------|
 |	 	+ Maternal Health >					   |
 |---------------------------------------------|
 |			- Antenatal care at least once	   |
 |			- Antenatal care at least 4 visits |
 |---------------------------------------------|
 |	 	- Number still births				   |
 |	 	- Number live births				   |
  ---------------------------------------------

+ Categories - expandable, you use this to explore and eventually find your indicator
- Indicators - the endpoints of the tree, what is actually selectable

Categories can have children of any type (categories, or other indicators, or mix and match)

*/

const INDICATORS = [
  {
    id: "hmis-1",
    name: "Total number positive for malaria",
    category: "positive-malaria"
  },
  {
    id: "hmis-2",
    name: "< 5 years: Males",
    category: "positive-malaria"
  },
  {
    id: "hmis-3",
    name: "< 5 years: Females",
    category: "positive-malaria"
  },
  {
    id: "hmis-4",
    name: "Total tests performed for malaria",
    category: "hmis-malaria"
  },
  {
    id: "hmis-5",
    name: "Antenatal care at least once",
    category: "maternal-health"
  },
  {
    id: "hmis-6",
    name: "Antenatal care at least 4 visits",
    category: "maternal-health"
  },
  {
    id: "hmis-7",
    name: "Number of still births",
    category: "hmis-maternal-child-health"
  },
  {
    id: "hmis-8",
    name: "Number of live births",
    category: "hmis-maternal-child-health"
  }
];

const CATEGORIES = [
  {
    id: "positive-malaria",
    name: "Positive Malaria",
    parent: "hmis-malaria"
  },
  {
    id: "hmis-malaria",
    name: "HMIS Malaria",
    parent: null
  },
  {
    id: "hmis-maternal-child-health",
    name: "HMIS Maternal and Child Health",
    parent: null
  },
  {
    id: "maternal-health",
    name: "Maternal Health",
    parent: "hmis-maternal-child-health"
  }
];

// If I have an element, what are all its parents?
// if id was "positive-malaria" - what is its parent?
function getItem(id) {
  for (let i = 0; i < CATEGORIES.length; i++) {
    // get element first
    console.log(CATEGORIES[i].id);
    if (id == CATEGORIES[i].id) {
      return CATEGORIES[i];
    } else {
      return false;
    }
  }
}

// End goal: If I have an element, what are all its children?
// find all items that have "parent" set to this id
// should return an array of items

// is item1 a child of item2?
function isItemAChild(item1, item2) {
  if (item1.parent == item2.id) {
    return true;
  } else {
    return false;
  }
}

// Example:
//     given "hmis-malaria", which are its children?
//     returns: ["positive-malaria", "maternal-health"]
function getChildren(id) {
  const mainObj = getItem(id);
  const resultArray = [];
  // iterate through the array
  for (let i = 0; i < CATEGORIES.length; i++) {
    const otherObj = CATEGORIES[i];

    // test: is otherObj a child of mainObj?
    if (isItemAChild(otherObj, mainObj)) {
      resultArray.push(otherObj);
    }
  }
  return resultArray;
}

/*
  
  console.log(getItem("positive-malaria"))
  console.log(isItemAChild(  {
      "id": "positive-malaria",
      "name": "Positive Malaria",
      "parent": "hmis-malaria"
    },
    {
      "id": "hmis-malaria",
      "name": "HMIS Malaria",
      "parent": null
    }))
  */
console.log(getChildren("hmis-malaria"));

// if we can answer that question, we can build a tree
/**
       root
      | (upwards)
    c1    c2
  
          root
         /     \
        c1      c2 c3 c4 c5
  
  */
