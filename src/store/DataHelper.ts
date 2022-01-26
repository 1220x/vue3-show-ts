// 负责localStorage的操作

class DataHelper {
    dataKey: string
    primaryKey: string

    constructor(dataKey: string = 'item', primaryKey: string = 'id') {
        this.dataKey = dataKey
        this.primaryKey = primaryKey
    }

    // 读取
    readData(): any {
        // 读取本地数据
        let strData: string | null = localStorage.getItem(this.dataKey)

        let arrData: any = []
        if (strData != null) {
            arrData = JSON.parse(strData)
        }

        return arrData
    }

    // 保存到localStorage中
    saveData(arrData: Array<Object>): void {
        const str: string = JSON.stringify(arrData)
        localStorage.setItem(this.dataKey, str);
    }

    // 添加
    addData(newDataObj: any): number {
        let dataArray = this.readData()

        if (dataArray == null) {
            dataArray = []
        }

        const newId = dataArray.length > 0 ? dataArray[dataArray.length - 1][this.primaryKey] + 1 : 1;
        newDataObj[this.primaryKey] = newId;
        dataArray.push(newDataObj)
        this.saveData(dataArray)

        return newId
    }

    // 移除
    removeDataById(id: string | number): boolean {
        // 读取本地数据
        let arr = this.readData();

        // 查找要删除的数据
        let index = arr.findIndex((ele: any) => {
            return ele[this.primaryKey] == id;
        })

        if (index > -1) {
            arr.splice(index, 1);
            this.saveData(arr);
            return true;
        }

        return false;
    }
}

export default DataHelper
