class ApplicationController < ActionController::Base
    layout :set_layout

    def set_layout
        if params["pjax"] 
            "pjax"
        end
    end

    def index
        @type = "pjax"
        @theme = "base"
        @path = "/example/home"
        render 'examples/home', layout: "application"
    end

    def errors
    end

    def locked
    end

    def login
    end

    def maintenance
    end

    def no_auth
    end

    def site_map
    end

end
