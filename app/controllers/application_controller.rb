class ApplicationController < ActionController::API
  before_action :fake_load

  def fake_load
    sleep(1)
    # 1秒だけプログラムの実行を止める
  end
end
