class Renderer {

    #citiesView
    #citiesHandler

    constructor(){
        this.#citiesView = $('.cities-container');
        this.#citiesHandler = this.#getTemplate('#weather-card-template')

    }

    render(cities){

        this.#renderList(this.#citiesView,this.#citiesHandler,cities)
    }

    #getTemplate(templateIdSelector){
        const src = $(templateIdSelector).html();
        const handleTemplate = Handlebars.compile(src);
        return handleTemplate
    }

    #renderList(view,handler,list){
        view.empty();
        list.forEach(element => {
            this.#renderElement(view,handler,element);    
        });
    }

    #renderElement(view,handler,data){
        const newHtml = handler(data)
        view.append(newHtml);
    }
}