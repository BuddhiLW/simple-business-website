(ns playground.become-a-chef.views.become-a-chef
  (:require
   [playground.components.page-nav :refer [page-nav]]
   [playground.become-a-chef.views.agreement :refer [agreement]]
   [playground.theme :refer [cards]]
   ["@mui/material" :refer [Box Grid Typography ButtonIcon IconButton
                            Card CardMedia CardContent ThemeProvider]]

   ["@mui/icons-material/CheckCircle" :default CheckCircleIcon]))

(defn become-a-chef
  []
  (let [steps [{:img "/img/curso.jpeg"
                :header "Cursos"
                :sub-header "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut consequat enim, eget posuere tortor. Phasellus pretium hendrerit ornare. Etiam vitae ex in lectus dapibus pharetra ut ac massa. Pellentesque tincidunt suscipit dignissim. Suspendisse vestibulum blandit pretium."}
               {:img "/img/consultoria.jpeg"
                :header "Consultoria"
                :sub-header "Vivamus sagittis quam et metus egestas faucibus. In sit amet consequat enim. Sed vel lorem sagittis, fringilla ante sagittis, convallis lacus. Sed eu tellus fringilla, finibus libero quis, varius ex. Aenean tempus finibus enim. Aliquam erat volutpat. Fusce mollis blandit auctor."}
               {:img "/img/comercializacao-exportacao.jpeg"
                :header "Comercialização e Exportação"
                :sub-header "Proin lacinia vitae ante nec laoreet. Etiam id tempus urna, in vehicula metus. Aliquam ac rutrum sapien, vel efficitur arcu. Nullam in enim ut enim vehicula sagittis. Sed tristique, orci sed tristique scelerisque, neque urna porta enim, eu feugiat risus est sed sem."}]]

    [:> ThemeProvider {:theme cards}
      [:> Box
       [page-nav {:center "Expedição Café"}]
       [:> Grid {:container true
                 :direction "row"
                 :spacing 2}
        [:> Grid {:item true
                  :xs 6
                  :display "flex"
                  :justify-content "center"
                  :align-items "center"}
         [:> Card {:sx {:max-width 700
                        :max-height 700
                        :border-radius "100%"
                        :box-shadow 4}
                   :class-name "rounded-full"
                   :variant "outlined"}
          [:> CardMedia {:component "img"
                         :class-name "rounded-full"
                         :src "./img/foto1.jpg"
                         :sx {:height 500
                              :width 500}
                         :alt "Hand holding a cup of coffee"}]]]

        [:> Grid {:item true
                  :xs 6
                  :display "flex"
                  :sx {:flex-direction "column"}
                  :gap 3
                  :justify-content "flex-start"}
         (for [{:keys [img alt header sub-header]} steps]
           ^{:key header}
           [:> Card {:sx {:max-width "85%"
                          :box-shadow 4
                          "&:hover" {:background-color "primary.light"
                                      :box-shadow 15}}}
            [:> CardMedia
             {:component "img"
              :sx {:height "15em"}
              :image img
              :alt header}]
            [:> CardContent
             [:> Typography {:variant "h5"}
                            header]
             [:> Typography {:variant "body2" :color "text.secondary"} sub-header]]])]]]]))
