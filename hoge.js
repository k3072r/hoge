function assign_check () {
    for(let i = 2; i < 30; i++){
        let flag1 = true
        let current_sheet = spreadsheet.getActiveSheet()
        let name = current_sheet.getValue(getRange(i, 1))
        if (name != "") {

            let sheet = spreadsheet.getSheetByName(name)
            for(let j = 2; j < 20; j++){
                let day = current_sheet.getValue(getRange(1, j))
                if (day != ""){

                    let flag2 = true
                    for (let row = 4; row < 50; row++){
                        let column = 12
                        let due_date = getValue(getRange(row, column + 3))
                        if (due_date = day){
                            flag2 = true
                            if (sheet.getValue(getRange(row, column + 3)) = "未"){
                                flag1 = flag1 && false
                            }
                        } else if (due_date != ""){
                            flag2 = false
                        } else if (flag2) {
                            if (sheet.getValue(getRange(row, column + 3)) = "未"){
                                flag1 = flag1 && false
                            }
                        }
                        
                        column = 24
                        let due_date = getValue(getRange(row, column + 3))
                        if (due_date = day){
                            flag2 = true
                            if (sheet.getValue(getRange(row, column + 3)) = "未"){
                                flag1 = flag1 && false
                            }
                        } else if (due_date != ""){
                            flag2 = false
                        } else if (flag2) {
                            if (sheet.getValue(getRange(row, column + 3)) = "未"){
                                flag1 = flag1 && false
                            }
                        }

                        column = 45
                        let due_date = getValue(getRange(row, column + 3))
                        if (due_date = day){
                            flag2 = true
                            if (sheet.getValue(getRange(row, column + 3)) = "未"){
                                flag1 = flag1 && false
                            }
                        } else if (due_date != ""){
                            flag2 = false
                        } else if (flag2) {
                            if (sheet.getValue(getRange(row, column + 3)) = "未"){
                                flag1 = flag1 && false
                            }
                        }

                        column = 57
                        let due_date = getValue(getRange(row, column + 3))
                        if (due_date = day){
                            flag2 = true
                            if (sheet.getValue(getRange(row, column + 3)) = "未"){
                                flag1 = flag1 && false
                            }
                        } else if (due_date != ""){
                            flag2 = false
                        } else if (flag2) {
                            if (sheet.getValue(getRange(row, column + 3)) = "未"){
                                flag1 = flag1 && false
                            }
                        }
                    }
                }
            }
            let check = "未"
            if (flag1) {
                check = "済"
            }
            current_sheet.getRange(i, j).setValue(check)
        }
    }
}