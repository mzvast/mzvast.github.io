module.exports = {
    helpers: {
        getDate: () => {
            let d = new Date();
            let year = d.getFullYear();
            let month = ('0' + (d.getMonth() + 1)).slice(-2);
            let day = ('0' + d.getDate()).slice(-2);
            let hour = ('00' + d.getHours()).slice(-2);
            let min = ('00' + d.getMinutes()).slice(-2);
            return `${year}/${month}/${day}-${hour}${min}`;
        }
    }
};
