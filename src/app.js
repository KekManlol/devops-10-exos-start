const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const getCurrentMonth = (date = new Date()) => {
    const currentMonth = date.getMonth();

    return months[currentMonth];
};

const isAdmin = (userId) => userId === "admin" || userId === "sudo";

const removeNamesWithX = (table) => {
    const theTable = [];
    table.forEach((aName) => {
        if (!aName.toLowerCase().includes("x")) theTable.push(aName);
    });
    return theTable;
};

exports.getCurrentMonth = getCurrentMonth;
exports.isAdmin = isAdmin;
exports.removeNamesWithX = removeNamesWithX;
