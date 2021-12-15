class HeroesController < ApplicationController
  before_action :authorize

  def index
    heroes = current_user.heroes
    render json: heroes
  end

  def create
    hero = current_user.heroes.create(hero_params)
    if hero.valid?
      render json: hero
    else
      render json: { errors: hero.errors.full_messages }, status: :uprocessible_entity
    end
  end

  def show
    hero = current_user.heroes.find_by(id: params[:id])
    if hero
      render json: hero
    else
      render json: { error: "Not Found" }, status: :unauthorized
    end
  end

  def destroy
    hero = Hero.find_by_id(params[:id])
    if hero
      hero.destroy
    else
      render json: { error: "Not Found" }, status: :unauthorized
    end
  end

  def update

  end

  private 

  def current_user
    user = User.find_by(id: session[:user_id])
  end

  def hero_params
    params.permit(:name, :story, :category)
  end

  def authorize
    return render json: { errors: "Access Denied" }, status: :unauthorized unless session.include? :user_id
  end
end

