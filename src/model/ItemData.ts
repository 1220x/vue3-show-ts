import Category from './CateEnum'

class ItemData {
    id: number
    categoryId: Category
    title: string
    content: string
    createTime: string

    constructor(id: number = -1, categoryId: Category = -1, title: string = '', content: string = '') {
        this.id = id
        this.categoryId = categoryId
        this.title = title
        this.content = content
        this.createTime = this.dateFormat()
    }

    dateFormat (): string {
        // 拿到当前的时间
        const date = new Date()
        const str = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${(date.getHours()).toString().padStart(2, '0')}:${(date.getMinutes()).toString().padStart(2, '0')}`

        return str
    }
}

export default ItemData
