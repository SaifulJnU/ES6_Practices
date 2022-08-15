const javaScrpt = {
        //key: value (value can be array, function)
        name: "saiful",
        subs: ["C++","javascrpt","java"],

        print: function(){
                this.subs.forEach((a)=>{
                   console.log('${this.name} "love" ${this.a}')
                })
        }
}

javaScrpt.print();