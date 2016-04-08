class VoteController < ApplicationController
    
    def comment_upload
        @rate = number_or_nil(params[:rate])
        if @rate < 6 && @rate > 0
            comments= Comment.new
            comments.c_id = params[:candidateID]
            comments.rate = params[:rate]
            comments.message = params[:message]
            comments.save
            
            @candidate = Candidate.where(c_id: params[:candidateID]).first
            @candidate.reply_num += 1
            @candidate.rate_sum += @rate
            @candidate.save
        end
        

        
        redirect_to "/vote/comment?candidateID="+comments.c_id
    end
    def comment
        @candidate2 = Candidate.where(c_id: params[:candidateID])
        @comment = Comment.where(c_id: params[:candidateID])
    end
    
    def region
    end
    
    def index
    @candidates = Candidate.all
    @region = Region.all
        # @candidates.each do |candidate|
    #         if candidate.terror == '1' 
    #             candidate.terror = '찬성'
    #             candidate.save
    #         elsif candidate.terror == '2' 
    #             candidate.terror = '반대'
    #             candidate.save
    #         elsif candidate.terror == '100'
    #             candidate.terror = '-'
    #             candidate.save
    #         end
            
    #         if candidate.disc == '1' 
    #             candidate.disc = '발의'
    #             candidate.save
    #         elsif candidate.disc == '100'
    #             candidate.disc = '-'
    #             candidate.save
    #         end
            
    #         if candidate.num_p == '100' 
    #             candidate.num_p = '-'
    # #         else
    # #             candidate.num_p += '번째'
    #         candidate.save
    #         end
        # end
    end
    
    def import
    Candidate.import(params[:file])
    #Region.import(params[:file])
    redirect_to root_url, notice: "Products imported."
    end
    
    def csvimport
    
    @products = Candidate.all 
    
    end
    

    
    def who
        #지역 id
        @region_id = params[:regionId]
        @electRegionID=params[:electRegionID]
        @region = Region.where(r_id: @region_id)
        if Region.where(goo_id: @electRegionID).first
            @electRegion = Region.where(goo_id: @electRegionID).first
        else
            @electRegion = @region.first
        end
        # @electRegion = @region.first
        #갑/을 선정
        @goo_id = @electRegion.goo_id
        #@goo_id = '8'
        
        
        @candidates = Candidate.where(goo_id: @goo_id)
        


    end
    
    def number_or_nil(string)
      Integer(string || '')
    rescue ArgumentError
      nil
    end

end
