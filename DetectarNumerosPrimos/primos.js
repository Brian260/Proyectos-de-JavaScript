for(let i=2;i<100;i++){
    if(i%2 == 0){
        if(i/2 == 1){
            document.write(i + " ");
        }
    }else if(i%3 == 0){
        if(i/3 == 1){
            document.write(i + " ");
        }
    }else if(i%5 == 0){
        if(i/5 == 1){
            document.write(i + " ");
        }
    }else if(i%7 == 0){
        if(i/7 == 1){
            document.write(i + " ");
        }
    }else{
        document.write(i + " ")
    }
}