class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :pages, :author_name, :author_id
end
