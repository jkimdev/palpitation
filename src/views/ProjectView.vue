<script setup>
import ProjectCard from '@/components/ProjectCard.vue'
</script>
<template>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
    <div class="col">
      <ProjectCard>
        <template #image>
          <img src=".././assets/images/mining.jpg" class="card-img-top" alt="..." style="height: 10rem;"/>
        </template>
        <template #card-title>세특학원 학쫑프로</template>
        <template #card-text>
          <ul>
            <li>[2023.07] 학쫑프로 수시배치표 런칭</li>
            <li>[2023.07] 학쫑프로 정식런칭</li>
          </ul>
        </template>
      </ProjectCard>
    </div>
    <div class="col">
      <ProjectCard>
        <template #image>
          <img src=".././assets/images/brain.jpg" class="card-img-top" alt="..." style="height: 10rem;"/>
        </template>
        <template #card-title>맞춤형 비교과 B2C 솔루션 세특여왕</template>
        <template #card-text>
          <ul>
            <li>[2023.07] 학쫑프로 수시배치표 런칭</li>
            <li>[2023.07] 학쫑프로 정식런칭</li>
          </ul>
        </template>
      </ProjectCard>
    </div>
    <div class="col">
      <ProjectCard>
        <template #image>
          <img src=".././assets/images/test.jpg" class="card-img-top" alt="..." style="height: 10rem;"/>
        </template>
        <template #card-title>AI 학습용 데이터 수집/가공 플랫폼 린에이아이(Lean AI)</template>
        <template #card-text>
          <ul>
            <li>[2023.07] 학쫑프로 수시배치표 런칭</li>
            <li>[2023.07] 학쫑프로 정식런칭</li>
          </ul>
        </template>
      </ProjectCard>
    </div>
  </div>
</template>
