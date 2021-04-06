class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
      t.integer :pages
      t.string :summary
      t.integer :rating
      t.boolean :favorite

      t.timestamps
    end
  end
end
