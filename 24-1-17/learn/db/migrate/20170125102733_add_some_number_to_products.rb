class AddSomeNumberToProducts < ActiveRecord::Migration[5.0]
  def change
    add_column :products, :some_number, :string
  end
end
