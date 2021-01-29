class NotesController < ApplicationController
      
    def show 
      note = Note.find(params[:id]) 
      if note
      render json:note
    
  end

  def create 
      note = Note.new(note_params)
      if note.save
      render json:note, include: :books
      end
  end

  def update 
      note = Note.find(params[:id])
      note.update(note_params)
      render json:note 
  end

  private
  def note_params
      params.require(:note).permit(:comment)
  end




end
