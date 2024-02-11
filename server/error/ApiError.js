class ApiError extends Error{ // наследуем от объекста Error
    constructor(status, message){
        super(); //вызываем родительские методы
        this.status=status
        this.message = message
    }

    static badRequest(message){ //принадлежит классу в целом, а не конкретному объекту
        return new ApiError(404, message)
    }
    static internal(message){ 
        return new ApiError(500, message)
    }
    static forbiden(message){ //доступа нет
        return new ApiError(403, message)
    }
}