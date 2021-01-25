class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.integer :user_id
      t.string :title
      t.string :author
      t.integer :pages
      t.string :summary
      t.string :image
      t.boolean :read

      t.timestamps
    end
  end
end
