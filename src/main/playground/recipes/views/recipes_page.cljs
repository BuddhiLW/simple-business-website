(ns playground.recipes.views.recipes-page
  (:require
   ["@mui/material" :refer [Grid Box Typography Button]]
   [playground.auth.subs]
   [playground.components.page-nav :refer [page-nav]]
   [playground.recipes.subs]
   [playground.recipes.views.recipe-editor :refer [recipe-editor]]
   [playground.recipes.views.recipe-list :refer [recipe-list]]
   [re-frame.core :as rf]))

(defn recipes-page
  []
  (fn []
     [:> Grid {:flex-grow 3}
      [page-nav {:center "Cursos"}]
      [:> Grid {:display "flex"
                :flex-direction "column"
                :container true}
       [:> Grid {:display "flex"
                 :gap 2
                 :mx "auto"}]
       [:<>
        [:> Grid {:container true
                  :mb 5
                  :row-spacing {:xs 1
                                :sm 2
                                :md 3}
                  :flex-direction "column"
                  :sx {:display "flex"
                       :flex-wrap "wrap"
                       :align-items "strech"}}
         [:> Box {:sx {:flex-shrink 1}}
          [:> Typography {:text-align "left"
                          :component "h2"
                          :variant "h2"
                          :pt 10
                          :pb 7
                          :pl 5
                          :font-weight 700}
           "Público"]]
         [recipe-list @(rf/subscribe [:filter/public])]]]]]))
