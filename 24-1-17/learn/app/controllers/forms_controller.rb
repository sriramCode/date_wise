class FormsController < ApplicationController
    def show
        @form = Form.find(params[:id])
    end
    def new
    end
    
    def create
  @form = Form.new(form_params)
  @form.save
  redirect_to @form
end
 
private
  def form_params
    params.require(:form).permit(:username, :fullname, :password)
  end
end
