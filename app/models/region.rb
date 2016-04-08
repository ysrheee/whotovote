class Region < ActiveRecord::Base
    has_many :candidates
    
require 'csv'

  def self.import(file)
    #CSV.parse(File.open(file.path, 'r:iso-8859-1:utf-8'){|f| f.read}, col_sep: ',', headers: true, header_converters: :symbol) do |row|
    #CSV.foreach(file.path, headers: true, external_encoding: "ISO-8859-1", internal_encoding: "utf-8") do |row|
    CSV.foreach(file.path, headers: true, col_sep:',') do |row|
      # UTF-8일 경우 header 값이 이상하게 나와서 직접 header값을 아래와 같이 입력해준 새로운 Row 객체를 생성함.. 
      # 왜 header 값이 이상하게 나오는지 원인 파악을 못함
      newrow = CSV::Row.new(['region','r_id','goo_id','goo_name', 'boundary'],[row.field(0),row.field(1),row.field(2),row.field(3),row.field(4)]);
      product_hash = newrow.to_hash # exclude the price field
      product = Region.where(id: product_hash["id"])
      if product.count == 1
        product.first.update_attributes(product_hash)
      else
        Region.create!(product_hash)
      end # end if !product.nil?
    end # end CSV.foreach
  end # end self.import(file)

end
