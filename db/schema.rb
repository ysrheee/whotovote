# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160406171144) do

  create_table "candidates", force: :cascade do |t|
    t.string   "do"
    t.string   "goo"
    t.string   "goo_id"
    t.string   "photo"
    t.string   "name"
    t.string   "party"
    t.integer  "c_id"
    t.string   "num"
    t.string   "disc"
    t.string   "terror"
    t.string   "num_p"
    t.string   "dropout"
    t.string   "birth"
    t.string   "age"
    t.integer  "reply_num",  default: 0
    t.integer  "rate_sum",   default: 0
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  create_table "comments", force: :cascade do |t|
    t.string   "c_id"
    t.integer  "rate"
    t.string   "message"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "regions", force: :cascade do |t|
    t.string   "region"
    t.string   "r_id"
    t.string   "goo_id"
    t.string   "goo_name"
    t.string   "boundary"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
