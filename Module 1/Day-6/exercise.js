// ● Create a function to calculate array of student data
//  ● The object has this following properties :
        // ○ Name → String
        // ○ Email → String
        // ○ Age → Date
        // ○ Score → Number
// ● Parameters : array of student
// ● Return values :
//  ○ Object with this following properties :
        // ■ Score
        // ● Highest
        // ● Lowest
        // ● Average
        // ■ Age
        // ● Highest
        // ● Lowest
        // ● Average


class arrOfStudent{
    name = '';
    address = '';
    age = '';
    score = 0;

    constructor(name, address, score){
        this.name = name;
        this.address = address;
        this.score = score;
    }
    set AgeConvert(age){ // jika salah satu dari constructor menggunakan setter atau getter, maka yang di contructor tidak perlu dimasukan
        let umurinMs = new Date(age).getFullYear()
        let nowInMs  = new Date().getFullYear()

        this.age = nowInMs - umurinMs
    }
}

let student1 =new arrOfStudent('Iqbal', 'Bitoeng', 95)
student1.AgeConvert = '1997-04-02'; // karena tanggal masuk dalam setter maka harus terpisah untuk memanggilnya
let student2 = new arrOfStudent('Irfan','Cikokol', 90)
student2.AgeConvert = '1997-01-01'
let student3 = new arrOfStudent('Tazzz','Cisauk', 85)
student3.AgeConvert = '1989-12-25'

const Student = [
        student1, student2, student3
]
function Score(arr){
        const arrScore = []
        let totalScore = 0

        for(let item of arr){
                arrScore.push(item.score)
                totalScore += item.score
        }

        return `
                Min = ${Math.min(...arrScore)} \n
                Max = ${Math.max(...arrScore)} \n
                Avg = ${totalScore/arr.length}
                
        `
}
console.log(Score(Student))



