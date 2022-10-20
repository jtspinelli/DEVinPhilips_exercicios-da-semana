let exercise7 = () => {
    let getCurrentSeason = () => {
        let currentMonth = new Date().getMonth() + 1;
        let currentDay = new Date().getDate();

        if(currentMonth == 1 || currentMonth == 2){
            return "Verão";
        }  

        if(currentMonth == 4 || currentMonth == 5){
            return "Outono";
        }

        if(currentMonth == 7 || currentMonth == 8){
            return "Inverno";
        }    

        if(currentMonth == 10 || currentMonth == 11){
            return "Primavera";
        }

        if(currentMonth == 3){
            return currentDay <= 21 ? "Verão" : "Outono";
        }

        if(currentMonth == 6){
            return currentDay <= 21 ? "Outono" : "Inverno";
        }

        if(currentMonth == 9){
            return currentDay <= 21 ? "Inverno" : "Primavera";
        }

        if(currentMonth == 12){
            return currentDay <= 21 ? "Primavera" : "Verão";
        }
    }

    alert(`ESTAÇÃO ATUAL: ${getCurrentSeason()}`);    
}